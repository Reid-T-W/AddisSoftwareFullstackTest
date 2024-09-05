// GET ALL ALBUMS

/**
 * @openapi
 * /albums:
 *  get:
 *   tags:
 *    - Albums
 *   summary: Get list of albums along with no of songs
 *   description: Get all albums with the number of songs they contain or search albums by album or artist name
 *   parameters:
 *    - in: query
 *      name: search
 *      schema:
 *       type: string
 *      description: album or artist name
 *   responses:
 *    200:
 *     description: Albums fetched successfully
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         type: object
 *         properties:
 *          album:
 *           type: string
 *           description: album name
 *          artist:
 *           type: string
 *           description: artist name 
 *          noOfSongs:
 *           type: number
 *           description: number of songs in the album
 */