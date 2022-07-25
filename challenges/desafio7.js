db.produtos
        .find({ curtidas: { $ne: 50 }, tags: null },
            { _id: 0, nome: 1, vendidos: 1 });