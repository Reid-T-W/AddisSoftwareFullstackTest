const Song = require("../models/song.model");
const catchAsync = require("../utils/catchAsync");

// eslint-disable-next-line no-unused-vars
const getGenres = catchAsync(async (req, res, next) => {
    const { search } = req.query;
    if (search) {
      const query = {
        $or: [
        //   { genre: new RegExp(search, 'i') },
        ]
      };
      const songs = await Song.find(query).sort({ createdAt: -1 });
      res.json(songs);
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