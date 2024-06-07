if (window.PrimeFaces) {
  /** Slovenian */
  PrimeFaces.locales["sl"] = {
    accept: "Sprejmi",
    addRule: "Dodaj pravilo",
    am: "dop.",
    apply: "Uporabi",
    cancel: "Prekliči",
    choose: "Izberi",
    chooseDate: "Izberi datum",
    chooseMonth: "Izberi mesec",
    chooseYear: "Izberi leto",
    clear: "Briši",
    completed: "Končan",
    contains: "Vsebuje",
    custom: "Po meri",
    dateAfter: "Datum je za",
    dateBefore: "Datum je pred",
    dateFormat: "dd.mm.yy",
    dateIs: "Datum je",
    dateIsNot: "Datum ni enak",
    dayNames: ["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"],
    dayNamesMin: ["ne", "po", "to", "sr", "če", "pe", "so"],
    dayNamesShort: ["ned.", "pon.", "tor.", "sre.", "čet.", "pet.", "sob."],
    emptyFilterMessage: "Ni rezultata",
    emptyMessage: "Ni opcije",
    emptySearchMessage: "Ni rezultata",
    emptySelectionMessage: "Ni izbora",
    endsWith: "Se konča z",
    equals: "Je enak",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    filter: "Filter",
    firstDayOfWeek: 0,
    gt: "Večji",
    gte: "Večji ali enak",
    lt: "Manjši",
    lte: "Manjši ali enak",
    matchAll: "Se ujema z vsem",
    matchAny: "Se ujema s katerim koli ",
    medium: "Medium",
    monthNames: ["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"],
    monthNamesShort: ["jan.", "feb.", "mar.", "apr.", "maj.", "jun.", "jul.", "avg.", "sep.", "okt.", "nov.", "dec."],
    nextDecade: "Naslednje desetletje",
    nextHour: "Naslednja ura",
    nextMinute: "Naslednja minuta",
    nextMonth: "Naslednji mesec",
    nextSecond: "Naslednja sekunda",
    nextYear: "Naslednje leto",
    noFilter: "Brez filtra",
    notContains: "Ne vsebuje",
    notEquals: "Ni enak",
    now: "zdaj",
    passwordPrompt: "Vnesi geslo",
    pending: "V teku",
    pm: "pop.",
    prevDecade: "Prejšnje desetletje",
    prevHour: "Prejšnja ura",
    prevMinute: "Prejšnja minuta",
    prevMonth: "Prejšnji mesec",
    prevSecond: "Prevjšnja sekunda",
    prevYear: "Prejšnje leto",
    reject: "Zavrni",
    removeRule: "Odvzemi pravilo",
    searchMessage: "{0} resultatov",
    selectionMessage: "{0} izbranih",
    showMonthAfterYear: false,
    startsWith: "Se začne z",
    strong: "Povdarjen",
    today: "Danes",
    upload: "Naloži",
    weak: "Teden",
    weekHeader: "Wk",
    aria: {
      cancelEdit: "Cancel Edit",
      close: "Zapri",
      collapseLabel: "Strni",
      collapseRow: "Vrstica strnjena",
      editRow: "Uredi vrstico",
      expandLabel: "Razširi",
      expandRow: "Vrstica razširjena",
      falseLabel: "False",
      filterConstraint: "Filter Constraint",
      filterOperator: "Filter Operator",
      firstPageLabel: "Prva stran",
      gridView: "Grid View",
      hideFilterMenu: "Skrij meni filtra",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      lastPageLabel: "Zadnja stran",
      listView: "List View",
      moveAllToSource: "Premakni vse na vir",
      moveAllToTarget: "Premakni vse na cilj",
      moveBottom: "Premik na dno",
      moveDown: "Premik dol",
      moveTop: "Premik na vrh",
      moveToSource: "Premik na vir",
      moveToTarget: "Premik na cilj",
      moveUp: "Premik gor",
      navigation: "Navigacija",
      next: "Naslednji",
      nextPageLabel: "Naslednja stran",
      nullLabel: "Ni izbran",
      otpLabel: "Vnesite znak za enkratno geslo {0}",
      pageLabel: "Stran {page}",
      passwordHide: "Skrij geslo",
      passwordShow: "Pokaži geslo",
      previous: "Prejšnji",
      previousPageLabel: "Prejšnja stran",
      rotateLeft: "Zavrti levo",
      rotateRight: "Zavrti desno",
      rowsPerPageLabel: "Vrstic na stran",
      saveEdit: "Shrani vrstico",
      scrollTop: "Premik na vrh",
      selectAll: "Izberi vse",
      selectLabel: "Izberite",
      selectRow: "Vrstica je izbrana",
      showFilterMenu: "Pokaži meni filtra",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      star: "1 zvezdica",
      stars: "{star} zvezdic",
      trueLabel: "True",
      unselectAll: "Prekliči izbor",
      unselectLabel: "Prekliči izbiro",
      unselectRow: "Vrstica ni izbrana",
      zoomImage: "Povečava slike",
      zoomIn: "Povečaj",
      zoomOut: "Zmanjšaj",
    },
  };

  // custom PF labels
  PrimeFaces.locales["sl"] = $.extend(true, {}, PrimeFaces.locales["sl"], {
    allDayText: "Ves dan",
    day: "Dan",
    hourText: "ura",
    isRTL: false,
    list: "Dnevni red",
    millisecondText: "Milisekunda",
    minuteText: "minuta",
    month: "mesec",
    moreLinkText: "več ...",
    noEventsText: "Ni dogodkov",
    secondText: "drugič",
    timeOnlyTitle: "Samo čas",
    timeText: "Čas",
    unexpectedError: "Nepričakovana napaka",
    week: "teden",
    weekNumberTitle: "W",
    year: "leto",
    yearSuffix: "",
    aria: {
      "colorpicker.ALPHASLIDER": "Drsnik za motnost",
      "colorpicker.CLEAR": "Počisti izbrano barvo",
      "colorpicker.CLOSE": "Zapri izbirnik barv",
      "colorpicker.FORMAT": "Barvni format",
      "colorpicker.HUESLIDER": "Drsnik za odtenek",
      "colorpicker.INPUT": "Polje vrednosti barve",
      "colorpicker.INSTRUCTION": "Izbirnik nasičenosti in svetlosti. Za izbiro uporabite puščične tipke gor, dol, levo in desno.",
      "colorpicker.MARKER": "Nasičenost: {s}. Svetlost: {v}.",
      "colorpicker.OPEN": "Odpri izbirnik barv",
      "colorpicker.SWATCH": "Barvni vzorec",
      "datatable.sort.ASC": "aktivirajte za razvrščanje stolpcev naraščajoče",
      "datatable.sort.DESC": "aktivirajte za razvrščanje stolpcev padajoče",
      "datatable.sort.NONE": "aktivirajte, da odstranite razvrščanje v stolpcu",
      "messages.ERROR": "Napaka",
      "messages.FATAL": "Usodno",
      "messages.INFO": "Informacije",
      "messages.WARN": "Opozorilo",
      "spinner.DECREASE": "Zmanjšaj vrednost",
      "spinner.INCREASE": "Povečajte vrednost",
      "switch.OFF": "Izključeno",
      "switch.ON": "Vklopljeno",
    },
    messages: {
      "javax.faces.component.UIInput.REQUIRED": "{0}: Napaka pri preverjanju: zahtevana je vrednost.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL": "{2}: &#39;{0}&#39; mora biti decimalno število s predznakom.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL_detail": "{2}: &#39;{0}&#39; mora biti decimalno število s predznakom, sestavljeno iz nič ali več števk, ki ji lahko sledita decimalna vejica in ulomek. Primer: {1}.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER": "{2}: &#39;{0}&#39; mora biti število, sestavljeno iz ene ali več števk.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail": "{2}: &#39;{0}&#39; mora biti število, sestavljeno iz ene ali več števk. Primer: {1}.",
      "javax.faces.converter.BooleanConverter.BOOLEAN": "{1}: »{0}« mora biti »true« ali »false«.",
      "javax.faces.converter.BooleanConverter.BOOLEAN_detail": "{1}: »{0}« mora biti »true« ali »false«. Vsaka vrednost, ki ni »true«, bo ocenjena kot »false«.",
      "javax.faces.converter.ByteConverter.BYTE": "{2}: &#39;{0}&#39; mora biti število med 0 in 255.",
      "javax.faces.converter.ByteConverter.BYTE_detail": "{2}: &#39;{0}&#39; mora biti število med 0 in 255. Primer: {1}.",
      "javax.faces.converter.CharacterConverter.CHARACTER": "{1}: &#39;{0}&#39; mora biti veljaven znak.",
      "javax.faces.converter.CharacterConverter.CHARACTER_detail": "{1}: &#39;{0}&#39; mora biti veljaven znak ASCII.",
      "javax.faces.converter.DateTimeConverter.DATE": "{2}: &#39;{0}&#39; ni bilo mogoče razumeti kot datum.",
      "javax.faces.converter.DateTimeConverter.DATE_detail": "{2}: &#39;{0}&#39; ni bilo mogoče razumeti kot datum. Primer: {1}.",
      "javax.faces.converter.DateTimeConverter.DATETIME": "{2}: &#39;{0}&#39; ni bilo mogoče razumeti kot datum in čas.",
      "javax.faces.converter.DateTimeConverter.DATETIME_detail": "{2}: &#39;{0}&#39; ni bilo mogoče razumeti kot datum in čas. Primer: {1}.",
      "javax.faces.converter.DateTimeConverter.PATTERN_TYPE": "{1}: Za pretvorbo vrednosti »{0}« je treba podati atribut &#39;vzorec&#39; ali &#39;tip&#39;.",
      "javax.faces.converter.DateTimeConverter.TIME": "{2}: »{0}« ni bilo mogoče razumeti kot časa.",
      "javax.faces.converter.DateTimeConverter.TIME_detail": "{2}: »{0}« ni bilo mogoče razumeti kot časa. Primer: {1}.",
      "javax.faces.converter.DoubleConverter.DOUBLE": "{2}: &#39;{0}&#39; mora biti število, sestavljeno iz ene ali več števk.",
      "javax.faces.converter.DoubleConverter.DOUBLE_detail": "{2}: &#39;{0}&#39; mora biti število med 4,9E-324 in 1,7976931348623157E308. Primer: {1}.",
      "javax.faces.converter.FloatConverter.FLOAT": "{2}: &#39;{0}&#39; mora biti število, sestavljeno iz ene ali več števk.",
      "javax.faces.converter.FloatConverter.FLOAT_detail": "{2}: &#39;{0}&#39; mora biti število med 1,4E-45 in 3,4028235E38 Primer: {1}.",
      "javax.faces.converter.IntegerConverter.INTEGER": "{2}: &#39;{0}&#39; mora biti število, sestavljeno iz ene ali več števk.",
      "javax.faces.converter.IntegerConverter.INTEGER_detail": "{2}: &#39;{0}&#39; mora biti število med -2147483648 in 2147483647. Primer: {1}.",
      "javax.faces.converter.NumberConverter.CURRENCY": "{2}: &#39;{0}&#39; ni bilo mogoče razumeti kot vrednosti valute.",
      "javax.faces.converter.NumberConverter.CURRENCY_detail": "{2}: &#39;{0}&#39; ni bilo mogoče razumeti kot vrednosti valute. Primer: {1}.",
      "javax.faces.converter.NumberConverter.NUMBER": "{2}: »{0}« ni bilo mogoče razumeti kot številke.",
      "javax.faces.converter.NumberConverter.NUMBER_detail": "{2}: »{0}« ni bilo mogoče razumeti kot številke. Primer: {1}.",
      "javax.faces.converter.NumberConverter.PATTERN": "{2}: &#39;{0}&#39; ni bilo mogoče razumeti kot številski vzorec.",
      "javax.faces.converter.NumberConverter.PATTERN_detail": "{2}: &#39;{0}&#39; ni bilo mogoče razumeti kot številski vzorec. Primer: {1}.",
      "javax.faces.converter.NumberConverter.PERCENT": "{2}: »{0}« ni bilo mogoče razumeti kot odstotek.",
      "javax.faces.converter.NumberConverter.PERCENT_detail": "{2}: &#39;{0}&#39; ni bilo mogoče razumeti kot odstotek. Primer: {1}.",
      "javax.faces.converter.ShortConverter.SHORT": "{2}: &#39;{0}&#39; mora biti število, sestavljeno iz ene ali več števk.",
      "javax.faces.converter.ShortConverter.SHORT_detail": "{2}: &#39;{0}&#39; mora biti število med -32768 in 32767. Primer: {1}.",
      "javax.faces.validator.BeanValidator.MESSAGE": "{0}",
      "javax.faces.validator.DoubleRangeValidator.MAXIMUM": "{1}: Napaka pri preverjanju: vrednost je večja od dovoljene največje vrednosti &#39;{0}&#39;.",
      "javax.faces.validator.DoubleRangeValidator.MINIMUM": "{1}: Napaka pri preverjanju: vrednost je manjša od najmanjše dovoljene vrednosti &#39;{0}&#39;.",
      "javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE": "{2}: Napaka pri preverjanju: Podani atribut ni med pričakovanima vrednostma {0} in {1}.",
      "javax.faces.validator.DoubleRangeValidator.TYPE": "{0}: Napaka pri preverjanju: vrednost ni pravilne vrste.",
      "javax.faces.validator.LengthValidator.MAXIMUM": "{1}: Napaka pri preverjanju: Dolžina je večja od dovoljene največje vrednosti &#39;{0}&#39;.",
      "javax.faces.validator.LengthValidator.MINIMUM": "{1}: Napaka pri preverjanju: dolžina je manjša od najmanjše dovoljene vrednosti &#39;{0}&#39;.",
      "javax.faces.validator.LongRangeValidator.MAXIMUM": "{1}: Napaka pri preverjanju: vrednost je večja od dovoljene največje vrednosti &#39;{0}&#39;.",
      "javax.faces.validator.LongRangeValidator.MINIMUM": "{1}: Napaka pri preverjanju: vrednost je manjša od najmanjše dovoljene vrednosti &#39;{0}&#39;.",
      "javax.faces.validator.LongRangeValidator.NOT_IN_RANGE": "{2}: Napaka pri preverjanju: Podani atribut ni med pričakovanima vrednostma {0} in {1}.",
      "javax.faces.validator.LongRangeValidator.TYPE": "{0}: Napaka pri preverjanju: vrednost ni pravilne vrste.",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION": "Napaka v regularnem izrazu.",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail": "Napaka v regularnem izrazu, &#39;{0}&#39;.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED": "Vzorec regularnega izraza se ne ujema.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED_detail": "Vzorec regularnega izraza &#39;{0}&#39; se ne ujema.",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET": "Vzorec regularnega izraza mora biti nastavljen.",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail": "Vzorec regularnega izraza mora biti nastavljen na neprazno vrednost.",
      "javax.validation.constraints.AssertFalse.message": "mora biti napačno",
      "javax.validation.constraints.AssertTrue.message": "mora biti res",
      "javax.validation.constraints.DecimalMax.message": "mora biti manjša ali enaka {0}",
      "javax.validation.constraints.DecimalMin.message": "mora biti večje ali enako {0}",
      "javax.validation.constraints.Digits.message": "številska vrednost je zunaj meja (&lt;{0} števk&gt;. &lt;{1} števk&gt; pričakovano)",
      "javax.validation.constraints.Email.message": "mora biti pravilno oblikovan elektronski naslov",
      "javax.validation.constraints.Future.message": "mora biti datum v prihodnosti",
      "javax.validation.constraints.FutureOrPresent.message": "mora biti datum v sedanjosti ali v prihodnosti",
      "javax.validation.constraints.Max.message": "mora biti manjša ali enaka {0}",
      "javax.validation.constraints.Min.message": "mora biti večje ali enako {0}",
      "javax.validation.constraints.Negative.message": "mora biti manjša od 0",
      "javax.validation.constraints.NegativeOrZero.message": "mora biti manjša ali enaka 0",
      "javax.validation.constraints.NotBlank.message": "ne sme biti prazno",
      "javax.validation.constraints.NotEmpty.message": "ne sme biti prazen",
      "javax.validation.constraints.NotNull.message": "ne sme biti ničelna",
      "javax.validation.constraints.Null.message": "mora biti ničelna",
      "javax.validation.constraints.Past.message": "mora biti pretekli datum",
      "javax.validation.constraints.PastOrPresent.message": "mora biti datum v preteklosti ali v sedanjosti",
      "javax.validation.constraints.Pattern.message": "se mora ujemati z &#39;{0}&#39;",
      "javax.validation.constraints.Positive.message": "mora biti večji od 0",
      "javax.validation.constraints.PositiveOrZero.message": "mora biti večja ali enaka 0",
      "javax.validation.constraints.Size.message": "velikost mora biti med {0} in {1}",
      "primefaces.FileValidator.ALLOW_TYPES": "Neveljavna vrsta datoteke.",
      "primefaces.FileValidator.ALLOW_TYPES_detail": "Neveljavna vrsta datoteke: &#39;{0}&#39;. Dovoljene vrste: &#39;{1}&#39;.",
      "primefaces.FileValidator.FILE_LIMIT": "Največje število datotek je preseženo.",
      "primefaces.FileValidator.FILE_LIMIT_detail": "Največje število: {0}.",
      "primefaces.FileValidator.SIZE_LIMIT": "Neveljavna velikost datoteke.",
      "primefaces.FileValidator.SIZE_LIMIT_detail": "Datoteka &#39;{0}&#39; ne sme biti večja od {1}.",
    },
  });
}