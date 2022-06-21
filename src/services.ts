export class APIService {
    getHello(): string {
        return 'Hello World!'
    }

    getPlaceholder(width: number, height: number): string {
        return `<svg width="${width}" height="${height}"><rect x="0" y="0" width="${width}" height="${height}" fill="transparent" stroke="green" stroke-width="10" /><text x="10" y="${
            height / 2
        }">${width} x ${height}</text></svg>`
    }
}

export default new APIService()
