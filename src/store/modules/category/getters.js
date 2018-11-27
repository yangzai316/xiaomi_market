export default {
    filterCategoryList(state){ 
        let _arr = [];
        state.categoryList.map(function(item) { 

            const _list_fill = item.category_list.filter(function(item_item){
                return item_item.view_type == 'cells_auto_fill';
            });

            const _list_group = item.category_list.filter(function(item_item){
                return item_item.view_type == 'category_group';
            })[0].body.items;

            let _list_fill_img = '';
            if(_list_fill.length>0) _list_fill_img = _list_fill[0].body.items[0].img_url;
            
            let _obj = {
                list_group:_list_group,
                fill_img:_list_fill_img, 
                name : item.category_name
            }  
            _arr.push(_obj); 
         });  
         return _arr

    },
};