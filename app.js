const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const path = require('path');
const cookieParser = require('cookie-parser');
const projectRouter = require('./routes/projectRoutes')
const experienceRouter = require('./routes/experienceRoutes')
const educationRouter = require('./routes/educationRoutes')
const certificationRouter = require('./routes/certificationRoutes')
const achievementRouter = require('./routes/achievementRoutes')

const globalErrorController = require('./controller/errorController');
const AppError = require('./utils/appError');


const app = express();

//secure http headers
app.use(helmet());
// Middleware to parse JSON requests
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true, limit: '10kb'}))
//Data sanatization against NoSQL query injection
app.use(mongoSanitize());

//Data sanitisation against XSS
app.use(xss());

//prevent parameter pollution
app.use(hpp());

//servving static files in project
app.use(express.static(path.join(__dirname, 'public')));

const loggerMiddleware = (req, res, next) => {
  console.log(`Request URL: ${req.originalUrl}`);
  next();
};

//test middleware
app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000/');
    // console.log(req.cookies);
    next();
  })
app.use(loggerMiddleware);

app.use('/api/v1/project',projectRouter);
app.use('/api/v1/experience',experienceRouter);
app.use('/api/v1/education',educationRouter);
app.use('/api/v1/certification',certificationRouter);
app.use('/api/v1/achievement',achievementRouter);



  //route to handle all unidentified routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the webapp.`, 404));
});

app.use(globalErrorController);

// Define a rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again in an 15 min',
});
app.use('/api', limiter);

  module.exports = app;
