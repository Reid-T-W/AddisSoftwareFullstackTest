// GET ALL STATS

/**
 * @openapi
 * /stats:
 *  get:
 *   tags:
 *     - Stats
 *   summary: Get stats
 *   description: Get all stats
 *   responses:
 *    200:
 *     description: Stats fetched successfully
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         songsCounts:
 *          type: number
 *          description: total number of songs
 *         artistsCounts:
 *          type: number
 *          description: total number of artists
 *         albumsCount:
 *          type: number
 *          description: total number of albums
 *         genresCount:
 *          type: number
 *          description: total number of genres
 * 
 */