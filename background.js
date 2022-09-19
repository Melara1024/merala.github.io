function changeBackground( name ) {
    switch(name)
    {
        case "bricks":
            document.getElementsByTagName('body')[0].style.backgroundImage = "url(https://github.com/Melara1024/site/blob/main/resources/background/sand.png)";
        break;
        case "sand":
            document.getElementsByTagName('body')[0].style.backgroundImage = "url(https://github.com/Melara1024/site/blob/main/resources/background/sand.png)";
        break;
        case "iron":
            document.getElementsByTagName('body')[0].style.backgroundImage = "url(https://github.com/Melara1024/site/blob/main/resources/background/iron_block.png)";
        break;
        case "deep":
            document.getElementsByTagName('body')[0].style.backgroundImage = "url(https://github.com/Melara1024/site/blob/main/resources/background/deepslate_top.png)";
        break;
        case "barrel":
            document.getElementsByTagName('body')[0].style.backgroundImage = "url(https://github.com/Melara1024/site/blob/main/resources/background/barrel_bottom.png)";
        break;
    }
}