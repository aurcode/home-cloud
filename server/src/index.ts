import express from 'express';
import fileUpload from 'express-fileupload';

// rest of the code remains same
const port = 5000;
const app = express();

app.use(fileUpload());

// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
    //console.log(req);
});

app.post('/upload', function (req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    const file: any = req.files.file;

    // Use the mv() method to place the file somewhere on your server
    file.mv(`${__dirname}/../Storage/${file.name}`, function (err: any) {
        if (err) return res.status(500).send(err);

        //console.log(file.name, `${file.size/10**6} MiB ha sido subido`)
        res.send('File uploaded!');
    });
});

// start the express server
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
