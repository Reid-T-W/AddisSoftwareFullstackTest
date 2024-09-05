/**
 * @fileoverview Genres Controller handles all genre-related operations.
 * This file defines controllers for getting list of genres.
 */
const Song = require("../models/song.model");
const catchAsync = require("../utils/catchAsync");

/**
 * Get list of genres or search genres by name.
 *
 * @function getGenres
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response containing the retrieved list of genres
 */
// eslint-disable-next-line no-unused-vars
const getGenres = catchAsync(async (req, res, next) => {
    const { search } = req.query;
    if (search) {
        const genres = await Song.aggregate([
            {
                $match: {
                    genre: new RegExp(search, 'i'),
                },
            },
            {
                $group: {
                  _id: '$genre',
                  noOfSongs: { $sum: 1 },
                },
              },
              {
                $project: {
                  genre: '$_id',
                  noOfSongs: 1,
                  _id: 0,
                },
              },
          ]);

      res.json(genres);
    } else {
        const genres = await Song.aggregate([
            {
                $group: {
                  _id: '$genre',
                  noOfSongs: { $sum: 1 },
                },
              },
              {
                $project: {
                  genre: '$_id',
                  noOfSongs: 1,
                  _id: 0,
                },
              },
          ]);
      res.json(genres);
    }
  });

  module.exports = { getGenres };