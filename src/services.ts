export class APIService {
    getPlaceholder(width: number, height: number): string {
        return `<svg width="${width}" height="${height}"><rect x="0" y="0" width="${width}" height="${height}" fill="lightgreen" stroke="green" stroke-width="5" /><text x="5" y="15">${width} x ${height}</text></svg>`
    }
    getImages(): string {
        return 'Hello image!'
    }
}

export default new APIService()
