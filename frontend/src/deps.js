export const deps = [
    {
        name : 'افلام' ,
        name_in_english : 'movies' ,
        subdeps : [
            { name : 'أفلام عربى' , link : 'movies/arabic-movies' } ,
            { name : 'أفلام أجنبى' , link : 'movies/english-movies' } ,
            { name : 'أفلام هندى' , link : 'movies/indian-movies'} ,
        ],
        link : ''
    } ,
    {
        name : 'مسلسلات' ,
        name_in_english : 'series' ,
        subdeps : [
            { name : 'مسلسلات عربى' , link : 'series/arabic-series' } ,
            { name : 'مسلسلات أجنبى' , link : 'series/english-series' } ,
            { name : 'مسلسلات هندى' , link : 'series/indian-series'} ,
        ],
        link : ''
    } ,
    {
        name : 'تلفزيون' ,
        name_in_english : 'tv' ,
        subdeps : [
            { name : 'برامج تلفزيونية' , link : '' } ,
            { name : 'مسرحيات' , link : '' } ,
        ],
        link : ''
    } ,
    {
        name : 'رمضان 2021' ,
        name_in_english : 'ramadan' ,
        subdeps : [
            {name:'' , link:''}
        ] ,
        link : ''
    },
]
