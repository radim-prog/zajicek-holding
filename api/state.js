var GIST_ID = '4bbd91f3a112f95cb9c10f1405c80834';

module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.status(200).end();

    var token = process.env.GITHUB_TOKEN;
    if (!token) return res.status(500).json({ error: 'GITHUB_TOKEN not configured' });

    var headers = {
        'Authorization': 'token ' + token,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
    };

    try {
        if (req.method === 'GET') {
            var resp = await fetch('https://api.github.com/gists/' + GIST_ID, { headers: headers });
            if (!resp.ok) return res.json(null);
            var gist = await resp.json();
            var content = gist.files && gist.files['state.json'] && gist.files['state.json'].content;
            if (!content) return res.json(null);
            var parsed = JSON.parse(content);
            if (parsed.initialized && !parsed.nodes) return res.json(null);
            return res.json(parsed);
        }

        if (req.method === 'POST') {
            var state = req.body;
            if (!state) return res.status(400).json({ error: 'No data' });
            var resp2 = await fetch('https://api.github.com/gists/' + GIST_ID, {
                method: 'PATCH',
                headers: headers,
                body: JSON.stringify({
                    files: { 'state.json': { content: JSON.stringify(state) } }
                })
            });
            if (!resp2.ok) {
                var err = await resp2.json();
                return res.status(502).json({ error: err.message });
            }
            return res.json({ success: true, timestamp: new Date().toISOString() });
        }

        return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
        console.error('State API error:', error);
        return res.status(500).json({ error: error.message });
    }
};
