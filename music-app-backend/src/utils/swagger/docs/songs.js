// GET ALL SONGS

/**
 * @openapi
 * /songs:
 *  get:
 *   tags:
 *     - Songs
 *   description: Get all songs
 *   responses:
 *    200:
 *      description: Songs fetched successfully
 */

// CREATE A SONG

/**
 * @openapi
 * /songs:
 *  post:
 *   tags:
 *    - Songs
 *   summary: Create a song
 *   requestBody:
 *     required: true
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        required:
 *         - title
 *         - artist
 *         - album
 *         - genre
 *        properties:
 *         title:
 *          type: string
 *          default: Song 1
 *         artist:
 *          type: string
 *          default: Artist 1
 *         album:
 *          type: string
 *          default: Album 1
 *         genre:
 *          type: string
 *          default: Genre 1
 *   responses:
 *    201:
 *     description: Song created successfully
 *    409:
 *     description: Conflict, song already exists
 *    400:
 *     description: Bad request
 */


  