/**
 * @fileoverview Artists Controller handles all artist-related operations.
 * This file defines controllers for getting list of artists.
 */
const Song = require("../models/song.model");
const catchAsync = require("../utils/catchAsync");

/**
 * Get list of artists or search artists by name.
 *
 * @function getArtists
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response containing the retrieved list of artists
 */
// eslint-disable-next-line no-unused-vars
const getArtists = catchAsync(async (req, res, next) => {
    const { search } = req.query;
    if (search) {
        const artists = await Song.aggregate([
            {
                $match: {
                    artist: new RegExp(search, 'i'),
                },
            },
            {
                $group: {
                  _id: '$artist',
                  noOfSongs: { $sum: 1 },
                  uniqueAlbums: { $addToSet: '$album' },
                },
              },
              {
                $project: {
                  artist: '$_id',
                  noOfSongs: 1,
                  noOfAlbums: { $size: '$uniqueAlbums' },
                  _id: 0,
                },
              },
          ]);
      res.json(artists);
    } else {
        const artists = await Song.aggregate([
            {
                $group: {
                  _id: '$artist',
                  noOfSongs: { $sum: 1 },
                  uniqueAlbums: { $addToSet: '$album' },
                },
              },
              {
                $project: {
                  artist: '$_id',
                  noOfSongs: 1,
                  noOfAlbums: { $size: '$uniqueAlbums' },
                  _id: 0,
                },
              },
          ]);
      res.json(artists);
    }
  });

  module.exports = { getArtists };
