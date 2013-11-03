﻿/*
 * Translated default messages for the jQuery validation plugin.
 * Language: RO
 * Author: Marius Cosareanu
 */

(function (factory) {
    if (typeof define === "function" && define.amd) {
        define('validate-ro', ['jquery', 'bforms-validate'], factory);
    } else {
        factory(window.jQuery);
    }
}(function (jQuery) {
    jQuery.extend(jQuery.validator.messages, {
        required: "Acest câmp este obligatoriu.",
        mandatory: "Acest câmp este obligatoriu",
        remote: "Te rugăm să completezi acest câmp.",
        email: "Te rugăm să introduci o adresă de mail validă",
        url: "Te rugăm sa introduci o adresă URL validă.",
        date: "Te rugăm să introduci o dată corectă.",
        dateISO: "Te rugăm să introduci o dată (ISO) corectă.",
        number: "Te rugăm să introduci un număr valid.",
        digits: "Te rugăm să introduci doar cifre.",
        creditcard: "Te rugăm să introduci un număr de card de credit valid.",
        equalTo: "Te rugăm să reintroduci valoarea.",
        maxlength: jQuery.format("Te rugăm să nu introduci mai mult de {0} caractere."),
        minlength: jQuery.format("Te rugăm să introduci cel puțin {0} caractere."),
        rangelength: jQuery.format("Te rugăm să introduci o valoare între {0} și {1} caractere."),
        range: jQuery.format("Te rugăm să introduci o valoare între {0} și {1}."),
        max: jQuery.format("Te rugăm să introduci o valoare egal sau mai mică decât {0}."),
        min: jQuery.format("Te rugăm să introduci o valoare egal sau mai mare decât {0}.")
    });
}));