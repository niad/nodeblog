$(document).ready(function() {
    $('#grid').jqGrid({
        url: '/ws/user',
        datatype: 'json',
        mtype: 'GET',
        colNames: ['id', 'name', 'name', 'type'],
        colModel : [
            {name: 'id', index: 'id', width: 60},
            {name: 'name', index: 'name', width: 100},
            {name: 'email', index: 'email', width: 200},
            {name: 'type', index: 'type', width: 80}
        ],
        viewrecords: true,

        rowNum: 30,
        rowList: [30, 50, 100],
        pager: '#pager',
        height: '100%',
        width: 'auto',
        sortname: 'name',
        sortorder: 'asc',
        caption: 'Grid Example',
        emptryrecords: '데이터가 없습니다.',
        jsonReader : {
            repeatitems: false,
            id: 'id',
            root: function(obj) {
                return obj.rows;
            },
            page: function(obj) {
                return obj.page;
            },
            total: function(obj) {
                return obj.total;
            },
            records: function(obj) {
                return obj.records;
            }
        }

    })
//        .navGrid('#pager');
});