const axios = require('axios');
const fs = require('fs');
const cron = require('node-cron');

// Function to fetch data from the API and write it to a JSON file
const fetchDataAndWriteToFile = async () => {
    try {
        const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        const data = response.data;
        fs.writeFileSync('cardinfo.json', JSON.stringify(data, null, 2));
        console.log('Data written to cardinfo.json');
    } catch (error) {
        console.error('Error fetching or writing data:', error);
    }
};

// Schedule the task to run daily at midnight
cron.schedule('0 0 * * *', fetchDataAndWriteToFile);

// Initial fetch when the script runs
fetchDataAndWriteToFile();
