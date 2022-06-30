$(function() {
    $('.sc-catawrap .title-wrap .all-title').click(function() {
        var activeTab = $(this).attr('data-tab');
        $('.sc-catawrap .title-wrap .all-title').removeClass('active');
        $('.sub-list').removeClass('active');
        $(this).addClass('active');
        $('#' + activeTab).addClass('active');
    })

    $('.sc-catawrap .stitle-wrap .item-wrap').click(function() {
        var activeTab = $(this).attr('data-tab');
        $('.sc-catawrap .stitle-wrap .item-wrap').removeClass('active');
        $('.cata-list').removeClass('active');
        $(this).addClass('active');
        $('#' + activeTab).addClass('active');
    })

    $('.sc-catawrap .sitem-wrap .cata-item').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
});