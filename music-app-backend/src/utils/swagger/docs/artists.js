// GET ALL ARTISTS

/**
 * @openapi
 * /artists:
 *  get:
 *   tags:
 *    - Artists
 *   summary: Get list of artists along with no of songs and no of albums
 *   description: Get all artist with the number of songs and albums they contain or search by artist name
 *   parameters:
 *    - in: query
 *      name: search
 *      schema:
 *       type: string
 *      description: artist name
 *   responses:
 *    200:
 *     description: Artists fetched successfully
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         type: object
 *         properties:
 *          noOfSongs:
 *           type: number
 *           description: number of songs in the album
 *          artist:
 *           type: string
 *           description: artist name 
 *          noOfAlbums:
 *           type: number
 *           description: number of albums the artist has
 */