const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/APIFeatures');

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);

    const doc = await query;

    if (!doc) {
      return next(new AppError('No Document with this ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: doc,
    });
  });

exports.getAll = (Model, popOption) =>
  catchAsync(async (req, res, next) => {
    let firstQuery = Model.find();
    if (popOption) firstQuery = firstQuery.populate(popOption);

    const features = new APIFeatures(firstQuery, req.query)
      .filter()
      .sort()
      .paginate();
    const docs = await features.query;

    res.status(200).json({
      status: 'success',
      count: docs.length,
      data: {
        docs,
      },
    });
  });
