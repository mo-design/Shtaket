<?php

$to = 'maximova.olga@gmail.com,mo.design@ukr.net'; //Почта получателя, через запятую можно указать сколько угодно адресов
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: shtaket.com.ua <site@shtaket.com.ua>\r\n"; //Наименование и почта отправителя
            
switch($_POST['action']) {
    case 'zakaz':
        if((isset($_POST['winzakaz_name'])&&$_POST['winzakaz_name']!="")&&(isset($_POST['wincalcul_email'])&&$_POST['wincalcul_email']!="")&&(isset($_POST['wincalcul_tel'])&&$_POST['wincalcul_tel']!="")&&(isset($_POST['l'])&&$_POST['l']!="")&&(isset($_POST['h'])&&$_POST['h']!="")&&(isset($_POST['x'])&&$_POST['x']!="")&&(isset($_POST['face_text'])&&$_POST['face_text']!="")&&(isset($_POST['cover_text'])&&$_POST['cover_text']!="")&&(isset($_POST['kolvo'])&&$_POST['kolvo']!="")&&(isset($_POST['pogmet'])&&$_POST['pogmet']!="")&&(isset($_POST['calc'])&&$_POST['calc']!="")) { 
            $subject = 'shtaket.com.ua - заказ'; //Заголовок сообщения
            $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['winzakaz_name'].'</p>
                        <p>Телефон: '.$_POST['wincalcul_tel'].'</p>
                        <p>E-mail: '.$_POST['wincalcul_email'].'</p>
                        <p>Время: '.$_POST['wincall_vopros'].'</p>
                        <p>l: '.$_POST['l'].'</p>
                        <p>h: '.$_POST['h'].'</p>
                        <p>x: '.$_POST['x'].'</p>
                        <p>Тип зашивки: '.$_POST['face_text'].'</p>
                        <p>Тип покрытия: '.$_POST['cover_text'].'</p>
                        <p>Кол-во штакетин: '.$_POST['kolvo'].'</p>
                        <p>Кол-во погонных метров: '.$_POST['pogmet'].'</p>
                        <p>Цена: '.$_POST['calc'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        }
        break;
        
    case 'dillers':
        if(isset($_POST['dillers__tel'])&&$_POST['dillers__tel']!="") {
            $subject = 'shtaket.com.ua - сотрудничество';
            $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Телефон: '.$_POST['dillers__tel'].'</p>
                    </body>
                </html>';
        }
        break;
        
    case 'callback':
        if((isset($_POST['wincall_name'])&&$_POST['wincall_name']!="")&&(isset($_POST['wincall_tel'])&&$_POST['wincall_tel']!="")) { 
            $subject = 'shtaket.com.ua - обратный звонок';
            $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['winzakaz_name'].'</p>
                        <p>Телефон: '.$_POST['wincalcul_tel'].'</p>
                        <p>Время: '.$_POST['wincall_vopros'].'</p>
                    </body>
                </html>';
        }
        break;
}


if ($message) {
    if (mail($to, $subject, $message, $headers)) {
        echo "true";
    } else {
        echo "Не удалось отправить сообщение!";
    }
} else {
    echo "Недостаточно данных для отправки сообщения!";
}

    
?>