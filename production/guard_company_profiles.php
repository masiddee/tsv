<?php
    $cname = $_POST['cname'];
    $address = $_POST['address'];
    $website = $_POST['website'];
    $cphone = $_POST['cphone'];
    $csize = $_POST['csize'];
    $industry = $_POST['industry'];
    $ctype = $_POST['ctype'];
    $pcname = $_POST['pcname'];
    $email = $_POST['email'];
    $pcphone = $_POST['pcphone'];
    $naics = $_POST['naics'];
    $certifications = $_POST['certifications'];
    $psc = $_POST['psc'];

    $xml = new DOMDocument('1.0', 'utf-8');
    $xml->formatOutput = true;
    $xml->preserveWhiteSpace = false;
    $xml->load('guard_company_profiles.xml');

    $element = $xml->getElementsByTagName('company')->item(0);

    $newCompany = $xml->createElement('company');
    $newCompany->appendChild($xml->createElement('vendorname',$cname));
    $newCompany->appendChild($xml->createElement('streetaddress',$address));
    $newCompany->appendChild($xml->createElement('phoneno',$cphone));
    $newCompany->appendChild($xml->createElement('naics_codes',$naics));

    $xml->getElementsByTagName('contractors')->item(0)->appendChild($newCompany);

    $xml->save('guard_company_profiles.xml');

    //echo "Data has been written";
?>