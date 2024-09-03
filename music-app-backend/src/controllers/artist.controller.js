const Song = require("../models/song.model");
const catchAsync = require("../utils/catchAsync");

// eslint-disable-next-line no-unused-vars
const getArtists = catchAsync(async (req, res, next) => {
    const { search } = req.query;
    if (search) {
      const query = {
        $or: [
        //   { artist: new RegExp(search, 'i') },
        ]
      };
      const songs = await Song.find(query).sort({ createdAt: -1 });
      res.json(songs);
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