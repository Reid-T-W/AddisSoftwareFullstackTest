// GET ALL SONGS

/**
 * @openapi
 * /songs:
 *  get:
 *   tags:
 *    - Songs
 *   summary: Get list of songs
 *   description: Get all songs
 *   parameters:
 *    - in: query
 *      name: search
 *      schema:
 *       type: string
 *      description: song title, album or artist name
 *   responses:
 *    200:
 *     description: Songs fetched successfully
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         type: object
 *         properties:
 *          _id:
 *           type: string
 *           description: song id 
 *          title:
 *           type: string
 *           description: song title 
 *          artist:
 *           type: string
 *           description: song artist 
 *          album:
 *           type: string
 *           description: song album  
 *          genre:
 *           type: string
 *           description: song genre 
 *          createdAt:
 *           type: string
 *           description: song creation date on DB
 *          updatedAt:
 *           type: string
 *           description: last date when song was updated on DB
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

// GET SONG DETAILS

/**
 * @openapi
 * /songs/{id}:
 *  get:
 *   tags:
 *     - Songs
 *   summary: Get song details
 *   description: Get details of a single song
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: Song ID
 *   responses:
 *    200:
 *      description: Song details fetched successfully
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          _id:
 *           type: string
 *           description: song id 
 *          title:
 *           type: string
 *           description: song title 
 *          artist:
 *           type: string
 *           description: song artist 
 *          album:
 *           type: string
 *           description: song album  
 *          genre:
 *           type: string
 *           description: song genre 
 *          createdAt:
 *           type: string
 *           description: song creation date on DB
 *          updatedAt:
 *           type: string
 *           description: last date when song was updated on DB
 */