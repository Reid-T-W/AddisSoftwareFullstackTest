// GET ALL GENRES

/**
 * @openapi
 * /genres:
 *  get:
 *   tags:
 *    - Genres
 *   summary: Get list of Genres along with no of songs
 *   description: Get all genres with the number of songs
 *   parameters:
 *    - in: query
 *      name: search
 *      schema:
 *       type: string
 *      description: genre name
 *   responses:
 *    200:
 *     description: Genres fetched successfully
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         type: object
 *         properties:
 *          noOfSongs:
 *           type: number
 *           description: number of songs with this genre
 *          genre:
 *           type: string
 *           description: genre name 

 */