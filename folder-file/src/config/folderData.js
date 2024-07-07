export const root = {
    id:1,
    name:'root',
    isFolder:true,
    items:[
        {
            id:2,
            name:'Folder 1',
            isFolder:true,
            items:[
                {
                    id:4,
                    name:'Folder 2',
                    isFolder:true,
                    items:[
                        {
                            id:5,
                            name:'File 2',
                            isFolder:false,
                            items:[]
                        }
                    ]
                }
            ]
        },
        {
            id:3,
            name:'File 1',
            isFolder:false,
            items:[]
        }
    ]
}