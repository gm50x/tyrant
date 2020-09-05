export default interface RequestError extends Error {
    statusCode: number
}