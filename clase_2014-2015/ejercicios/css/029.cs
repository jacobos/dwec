        @import url(http://fonts.googleapis.com/css?family=Oswald);
        body {
            background-color: #000;
            font-family: 'Oswald', 'Futura', sans-serif;
            margin: 0px;
            padding: 0px;
        }
        #page {
            background-color: #403c3b;
            margin: 0px auto 0px auto;
            position: relative;
            text-align: center;
        }
        /* Responsive page rules at bottom of style sheet */
        h1 {
            background-image: url(http://1.bp.blogspot.com/-T6CI6uzEAYI/UxYoCRFPZpI/AAAAAAAA5j8/bAKAS7fVgUg/s72-c/dragon_render_by_zoisitesarugaki-d6aicqi.png);
            background-repeat: no-repeat;
            background-position: center center;
            text-align: center;
            text-indent: -1000%;
            height: 75px;
            line-height: 75px;
            width: 117px;
            margin: 0px auto 0px auto;
            padding: 30px 10px 20px 10px;
        }
        h2 {
            color: #fff;
            font-size: 24px;
            font-weight: normal;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: .3em;
            display: inline-block;
            margin: 0px 0px 23px 0px;
        }
        h2 span {
            background-color: #fff;
            color: #000;
            font-size: 12px;
            text-align: center;
            letter-spacing: 0em;
            display: inline-block;
            position: relative;
            border-radius: 50%;
            top: -5px;
            height: 22px;
            width: 26px;
            padding: 4px 0px 0px 0px;
        }
        ul {
            border: none;
            padding: 0px;
            margin: 0px;
        }
        li {
            background-color: #ec8b68;
            color: #fff;
            border-top: 1px solid #fe9772;
            border-bottom: 1px solid #9f593f;
            font-size: 24px;
            letter-spacing: .05em;
            list-style-type: none;
            text-shadow: 2px 2px 1px #9f593f;
            text-align: left;
            height: 50px;
            padding-left: 1em;
            padding-top: 10px;
        }
        li a {
            color: #fff;
            background-image: url('../images/icon-link.png');
            background-position: center right;
            background-repeat: no-repeat;
            text-decoration: none;
            padding-right: 36px;
        }
        li.complete a {
            background-image: none);
        }
        p {
            background-color: #fff;
            color: #666;
            padding: 10px;
            display: inline-block;
            margin: 20px auto 20px auto;
            width: 80%;
            border-radius: 5px;
            text-align: center;
        }
        .hot {
            background-color: #d7666b;
            color: #fff;
            text-shadow: 2px 2px 1px #914141;
            border-top: 1px solid #e99295;
            border-bottom: 1px solid #914141;
        }
        .cool {
            background-color: #6cc0ac;
            color: #fff;
            text-shadow: 2px 2px 1px #3b6a5e;
            border-top: 1px solid #7ee0c9;
            border-bottom: 1px solid #3b6a5e;
        }
        .complete {
            background-color: #999;
            color: #fff;
            background-image: url("../images/icon-trash.png");
            background-position: center right;
            background-repeat: no-repeat;
            text-shadow: 2px 2px 1px #ccc;
            border-top: 1px solid #666;
            border-bottom: 1px solid #b0b0b0;
            text-shadow: 2px 2px 1px #333;
        }
        .complete a {
            display: block;
        }
        .favorite {
            background-image: url('../images/icon-heart.png');
            background-position: center right;
            background-repeat: no-repeat;
        }
        em.seasonal {
            background-image: url('../images/icon-calendar.png');
            background-position: left center;
            background-repeat: no-repeat;
            padding-left: 30px;
        }
        /* FORM STYLES */
        form {
            padding: 0px 20px 20px 20px;
        }
        label {
            color: #fff;
            display: block;
            margin: 10px 0px 10px 0px;
            font-size: 24px;
        }
        input[type='text'],
        input[type='password'],
        textarea {
            background-color: #999;
            color: #333;
            font-size: 24px;
            width: 96%;
            padding: 4px 6px;
            border: 1px solid #999;
            border-radius: 8px;
        }
        input[type='submit'],
        a.add,
        button,
        a.show {
            background-color: #cb6868;
            color: #f3dad1;
            border-radius: 8px;
            border: none;
            padding: 8px 10px;
            margin-top: 10px;
            font-family: 'Oswald', 'Futura', sans-serif;
            font-size: 18px;
            text-decoration: none;
            text-transform: uppercase;
        }
        input[type='submit'],
        a.add,
        button {
            float: right;
        }
        input[type='text']:focus,
        input[type='password']:focus,
        textarea:focus {
            border: 1px solid #fff;
            background-color: #fff;
            outline: none;
        }
        input[type='submit']:hover,
        a.add:hover,
        a.show:hover {
            background-color: #000;
            color: #fff;
            cursor: pointer;
        }
        ::-webkit-input-placeholder {
            color: #403c3b;
            font-family: arial, sans-serif;
        }
        :-moz-placeholder {
            /* Firefox 18- */
            color: #403c3b;
            font-family: arial, sans-serif;
        }
        ::-moz-placeholder {
            /* Firefox 19+ */
            color: #403c3b;
            font-family: arial, sans-serif;
        }
        :-ms-input-placeholder {
            color: #403c3b;
            font-family: arial, sans-serif;
        }
        textarea {
            width: 96%;
            height: 5em;
            line-height: 1.4em;
        }
        select,
        option {
            font-size: 16px;
        }
        #feedback,
        #termsHint {
            color: #fff;
            background-image: url('../images/warning.png');
            background-repeat: no-repeat;
            background-position: 2px 14px;
            padding: 10px 0px 0px 22px;
        }
        #packageHint {
            color: #fff;
            background-image: url('../images/hint.png');
            background-repeat: no-repeat;
            background-position: 2px 5px;
            padding-left: 22px;
        }
        label.selectbox {
            display: inline;
        }
        label.checkbox {
            display: inline;
            font-size: 16px;
        }
        /* Link to show list */
        h2 a {
            font-size: 12px;
        }
        a.show {
            font-size: 12px;
            padding: 5px;
            letter-spacing: 0em;
            position: relative;
            top: -5px;
            left: 10px;
        }
        /* form example */
        #newItemButton {
            padding: 10px 20px 75px 20px;
            display: none;
        }
        #newItemForm {
            padding-top: 20px;
        }
        #itemDescription {
            width: 360px;
        }
        #newItemForm input[type='submit'] {
            margin-top: 0px;
            text-align: left;
        }
        /* Attributes example */
        #group {
            margin: 10px;
            border: 2px solid #fff;
        }
        /* Events object */
        .date,
        li i {
            font-size: 12px;
            padding-left: 8px;
        }
        /* Additional styles for position example */
        #slideAd {
            width: 130px;
            height: 60px;
            background-color: #403c3b;
            background-image: url('../images/adverlion.png');
            background-repeat: no-repeat;
            background-position: 10px center;
            color: #fff;
            border-top: 1px solid #fff;
            border-left: 1px solid #fff;
            border-bottom: 1px solid #fff;
            padding: 25px 20px 10px 85px;
            position: fixed;
            bottom: 20px;
            right: -235px;
            text-transform: uppercase;
        }
        #footer {
            background: none;
            color: #fff;
        }
        /* Small screen:mobile */
        @media only screen and (max-width: 500px) {
            body {
                background-color: #403c3b;
            }
            #page {
                max-width: 480px;
            }
        }
        @media only screen and (min-width: 501px) and (max-width: 767px) {
            #page {
                max-width: 480px;
                margin: 20px auto 20px auto;
            }
        }
        @media only screen and (min-width: 768px) and (max-width: 959px) {
            #page {
                max-width: 480px;
                margin: 20px auto 20px auto;
            }
        }
        /* Larger screens act like a demo for the app */
        @media only screen and (min-width: 960px) {
            #page {
                max-width: 480px;
                margin: 20px auto 20px auto;
            }
        }
        @media (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi) {
            h1 {
                background-image: url(http://apaucalypse.com/img/dragon_logo.jpg);
                background-size: 72px 72px;
            }
        }