module.exports={
    chainWebpack:config=>{
        config.resolve.alias.set('assets','@/assets').set('components','@/components')
            .set('views','@/views').set('common','@/common')
    }
}