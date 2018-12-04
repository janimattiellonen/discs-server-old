

export default {
    getDiscs: async (conn) => {
        const [rows, fields] = await conn.execute('select * from disc');

        console.log('rows: ' + JSON.stringify(rows));

        return {
            rows,
            fields,
        }
    },

    addDisc: async (conn, disc) => {
        conn.execute(`
            INSERT INTO disc (
                name,
                type,
                manufacturer,
                color,
                material,
                speed,
                glide,
                stability,
                fade,
                weight,
                is_missing,
                missing_description,
                is_sold,
                is_broken,
                hole_in_one_at,
                is_collection_item,
                sold_at,
                additional
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                disc.name,
                disc.type,
                disc.manufacturer,
                disc.color,
                disc.material,
                disc.speed,
                disc.glide,
                disc.stability,
                disc.fade,
                disc.weight,
                disc.isMissing,
                disc.missingDescription,
                disc.isSold,
                disc.isBroken,
                disc.holeInOneAt,
                disc.isCollectionItem,
                disc.soldAt,
                disc.additional
            ]
        );
    }
}