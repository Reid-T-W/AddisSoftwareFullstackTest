/**
 * @fileoverview Album Controller handles all album-related operations.
 * This file defines controllers for getting list of albums.
 */
const Song = require("../models/song.model");
const catchAsync = require("../utils/catchAsync");

/**
 * Get list of albums or search albums by album or artist name.
 *
 * @function getAlbums
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response containing the retrieved list of albums
 */
// eslint-disable-next-line no-unused-vars
const getAlbums = catchAsync(async (req, res, next) => {
    const { search } = req.query;
    if (search) {
        const albums = await Song.aggregate([
            {      
                $match: {
                    $or: [
                        { artist: new RegExp(search, 'i') },
                        { album: new RegExp(search, 'i') },
                    ]
                },
            },
            {
                $group: {
                  _id: { artist: '$artist', album: '$album' },
                  noOfSongs: { $sum: 1 },
                },
              },
              {
                $project: {
                  artist: '$_id.artist',
                  album: '$_id.album',
                  noOfSongs: 1,
                  _id: 0,
                },
              },
          ]);
      res.json(albums);
    } else {
        const albums = await Song.aggregate([
            {
                $group: {
                  _id: { artist: '$artist', album: '$album' },
                  noOfSongs: { $sum: 1 },
                },
              },
              {
                $project: {
                  artist: '$_id.artist',
                  album: '$_id.album',
                  noOfSongs: 1,
                  _id: 0,
                },
              },
          ]);
      res.json(albums);
    }
  });

  module.exports = { getAlbums };