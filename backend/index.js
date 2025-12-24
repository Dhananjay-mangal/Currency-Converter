const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/currencies', async (req, res) => {
    try {
        const response = await axios.get(
            'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json'
        );

        const currencies = Object.entries(response.data).map(
            ([code, name]) => ({ code, name })
        );

        res.json(currencies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch currencies' });
    }
});

app.post('/api/convert', async (req, res) => {
    const { from, to, amount } = req.body;

    if (!from || !to || !amount) {
        return res.status(400).json({
            error: 'Missing required fields (from, to, amount)'
        });
    }

    try {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;
        const response = await axios.get(url);

        const rate = response.data[from][to];

        if (!rate) {
            return res.status(400).json({
                error: 'Invalid currency code'
            });
        }

        const result = amount * rate;

        res.json({
            from,
            to,
            amount,
            rate,
            result
        });
    } catch (error) {
        res.status(500).json({ error: 'Conversion failed' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
