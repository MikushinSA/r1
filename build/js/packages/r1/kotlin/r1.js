(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'r1'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'r1'.");
    }
    if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'r1'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'r1'.");
    }
    root.r1 = factory(typeof r1 === 'undefined' ? {} : r1, kotlin, this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var getCallableRef = Kotlin.getCallableRef;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var attributesMapOf = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_jyasbz$;
  var LABEL_init = $module$kotlinx_html_js.kotlinx.html.LABEL;
  var HTMLLabelElement_0 = HTMLLabelElement;
  var visitTagAndFinalize = $module$kotlinx_html_js.kotlinx.html.visitTagAndFinalize_g9qte5$;
  var enumEncode = $module$kotlinx_html_js.kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlinx_html_js.kotlinx.html.INPUT;
  var visitTag = $module$kotlinx_html_js.kotlinx.html.visitTag_xwv8ym$;
  var DIV_init = $module$kotlinx_html_js.kotlinx.html.DIV;
  var BUTTON_init = $module$kotlinx_html_js.kotlinx.html.BUTTON;
  function visitAndFinalize$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function label$lambda($receiver) {
    return Unit;
  }
  function visit$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function input$lambda($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda_1(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function button$lambda($receiver) {
    return Unit;
  }
  function main$lambda(it) {
    var tmp$;
    return (tmp$ = document.body) != null ? (createCalculator(tmp$), Unit) : null;
  }
  function main() {
    window.onload = main$lambda;
  }
  function onClickCelsiusToFahrenheit(e) {
    var tmp$, tmp$_0, tmp$_1;
    var celsiusInput = Kotlin.isType(tmp$ = document.getElementById('celsius'), HTMLInputElement) ? tmp$ : throwCCE();
    var fahrenheitInput = Kotlin.isType(tmp$_0 = document.getElementById('fahrenheit'), HTMLInputElement) ? tmp$_0 : throwCCE();
    var celsius = (tmp$_1 = toDoubleOrNull(celsiusInput.value)) != null ? tmp$_1 : 0.0;
    fahrenheitInput.value = (celsius * 9 / 5 + 32).toString();
  }
  function onClickFahrenheitToCelsius(e) {
    var tmp$, tmp$_0, tmp$_1;
    var celsiusInput = Kotlin.isType(tmp$ = document.getElementById('celsius'), HTMLInputElement) ? tmp$ : throwCCE();
    var fahrenheitInput = Kotlin.isType(tmp$_0 = document.getElementById('fahrenheit'), HTMLInputElement) ? tmp$_0 : throwCCE();
    var fahrenheit = (tmp$_1 = toDoubleOrNull(fahrenheitInput.value)) != null ? tmp$_1 : 0.0;
    celsiusInput.value = ((fahrenheit - 32) * 5 / 9).toString();
  }
  function createCalculator$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('\u0426\u0435\u043B\u044C\u0441\u0438\u044F:');
    return Unit;
  }
  function createCalculator$lambda$lambda$lambda_0($receiver) {
    set_id($receiver, 'celsius');
    return Unit;
  }
  function createCalculator$lambda$lambda(this$) {
    return function ($receiver) {
      var $receiver_0 = this$;
      var tmp$;
      Kotlin.isType(tmp$ = visitTagAndFinalize(new LABEL_init(attributesMapOf('class', null), $receiver_0), $receiver_0, visitAndFinalize$lambda(createCalculator$lambda$lambda$lambda)), HTMLLabelElement_0) ? tmp$ : throwCCE();
      visitTag(new INPUT_init(attributesMapOf_0(['type', null != null ? enumEncode(null) : null, 'formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'class', null]), $receiver.consumer), visit$lambda(createCalculator$lambda$lambda$lambda_0));
      return Unit;
    };
  }
  function createCalculator$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('\u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442:');
    return Unit;
  }
  function createCalculator$lambda$lambda$lambda_2($receiver) {
    set_id($receiver, 'fahrenheit');
    return Unit;
  }
  function createCalculator$lambda$lambda_0(this$) {
    return function ($receiver) {
      var $receiver_0 = this$;
      var tmp$;
      Kotlin.isType(tmp$ = visitTagAndFinalize(new LABEL_init(attributesMapOf('class', null), $receiver_0), $receiver_0, visitAndFinalize$lambda(createCalculator$lambda$lambda$lambda_1)), HTMLLabelElement_0) ? tmp$ : throwCCE();
      visitTag(new INPUT_init(attributesMapOf_0(['type', null != null ? enumEncode(null) : null, 'formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'class', null]), $receiver.consumer), visit$lambda(createCalculator$lambda$lambda$lambda_2));
      return Unit;
    };
  }
  function createCalculator$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('\u0426\u0435\u043B\u044C\u0441\u0438\u044F \u0432 \u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442');
    set_onClickFunction($receiver, getCallableRef('onClickCelsiusToFahrenheit', function (p1) {
      return onClickCelsiusToFahrenheit(p1), Unit;
    }));
    return Unit;
  }
  function createCalculator$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('\u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442 \u0432 \u0426\u0435\u043B\u044C\u0441\u0438\u044F');
    set_onClickFunction($receiver, getCallableRef('onClickFahrenheitToCelsius', function (p1) {
      return onClickFahrenheitToCelsius(p1), Unit;
    }));
    return Unit;
  }
  function createCalculator$lambda($receiver) {
    visitTagAndFinalize(new DIV_init(attributesMapOf('class', null), $receiver), $receiver, visitAndFinalize$lambda_0(createCalculator$lambda$lambda($receiver)));
    visitTagAndFinalize(new DIV_init(attributesMapOf('class', null), $receiver), $receiver, visitAndFinalize$lambda_0(createCalculator$lambda$lambda_0($receiver)));
    visitTagAndFinalize(new BUTTON_init(attributesMapOf_0(['formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'type', null != null ? enumEncode(null) : null, 'class', null]), $receiver), $receiver, visitAndFinalize$lambda_1(createCalculator$lambda$lambda_1));
    visitTagAndFinalize(new BUTTON_init(attributesMapOf_0(['formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'type', null != null ? enumEncode(null) : null, 'class', null]), $receiver), $receiver, visitAndFinalize$lambda_1(createCalculator$lambda$lambda_2));
    return Unit;
  }
  function createCalculator($receiver) {
    append($receiver, createCalculator$lambda);
  }
  _.main = main;
  _.onClickCelsiusToFahrenheit_9ojx7i$ = onClickCelsiusToFahrenheit;
  _.onClickFahrenheitToCelsius_9ojx7i$ = onClickFahrenheitToCelsius;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  _.createCalculator_asww5s$ = createCalculator;
  main();
  Kotlin.defineModule('r1', _);
  return _;
}));

//# sourceMappingURL=r1.js.map
