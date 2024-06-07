if (window.PrimeFaces) {
  /** Japanese */
  PrimeFaces.locales["ja"] = {
    accept: "はい",
    addRule: "条件追加",
    am: "午前",
    apply: "適用",
    cancel: "キャンセル",
    choose: "選択",
    chooseDate: "日を選択",
    chooseMonth: "月を選択",
    chooseYear: "年を選択",
    clear: "クリア",
    completed: "完了済",
    contains: "含む",
    custom: "カスタム",
    dateAfter: "指定日より未来",
    dateBefore: "指定日より過去",
    dateFormat: "yy/mm/dd",
    dateIs: "等しい",
    dateIsNot: "等しくない",
    dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
    dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
    dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
    emptyFilterMessage: "オプションなし",
    emptyMessage: "結果なし",
    emptySearchMessage: "該当なし",
    emptySelectionMessage: "選択なし",
    endsWith: "終わる",
    equals: "等しい",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    filter: "フィルター",
    firstDayOfWeek: 0,
    gt: "超える",
    gte: "以上",
    lt: "未満",
    lte: "以下",
    matchAll: "全て一致",
    matchAny: "いずれかが一致",
    medium: "普通",
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    nextDecade: "後の10年",
    nextHour: "次の時間",
    nextMinute: "次の分",
    nextMonth: "翌月",
    nextSecond: "次の秒",
    nextYear: "翌年",
    noFilter: "フィルターなし",
    notContains: "含まない",
    notEquals: "等しくない",
    now: "今",
    passwordPrompt: "パスワードを入力",
    pending: "保留",
    pm: "午後",
    prevDecade: "前の10年",
    prevHour: "前の時間",
    prevMinute: "前の分",
    prevMonth: "先月",
    prevSecond: "前の秒",
    prevYear: "前年",
    reject: "いいえ",
    removeRule: "条件削除",
    searchMessage: "{0} 件の結果",
    selectionMessage: "{0} 件選択済み",
    showMonthAfterYear: true,
    startsWith: "始まる",
    strong: "強い",
    today: "今日",
    upload: "アップロード",
    weak: "弱い",
    weekHeader: "週",
    aria: {
      cancelEdit: "キャンセル",
      close: "閉じる",
      collapseLabel: "崩壊",
      collapseRow: "折りたたみ行",
      editRow: "行編集",
      expandLabel: "拡大する",
      expandRow: "展開済行",
      falseLabel: "False",
      filterConstraint: "フィルター成約",
      filterOperator: "フィルター操作",
      firstPageLabel: "最初のページ",
      gridView: "グリッドビュー",
      hideFilterMenu: "フィルターメニューを非表示",
      jumpToPageDropdownLabel: "ページドロップダウンへ",
      jumpToPageInputLabel: "ページ入力へ",
      lastPageLabel: "最後のページ",
      listView: "リストビュー",
      moveAllToSource: "ソースへ全て移動",
      moveAllToTarget: "ターゲットへ全て移動",
      moveBottom: "一番下へ",
      moveDown: "下へ",
      moveTop: "トップへ移動",
      moveToSource: "ソースへ移動",
      moveToTarget: "ターゲットへ移動",
      moveUp: "上へ",
      navigation: "ナビゲーション",
      next: "次",
      nextPageLabel: "次のページ",
      nullLabel: "未選択",
      otpLabel: "ワンタイム パスワードの文字 {0} を入力してください",
      pageLabel: "{page}ページ",
      passwordHide: "パスワードを隠す",
      passwordShow: "パスワードを表示",
      previous: "前",
      previousPageLabel: "前のページ",
      rotateLeft: "左に回転",
      rotateRight: "右に回転",
      rowsPerPageLabel: "行/ページ",
      saveEdit: "保存",
      scrollTop: "トップへスクロール",
      selectAll: "全て選択",
      selectLabel: "選択する",
      selectRow: "選択済み行",
      showFilterMenu: "フィルターメニューを表示",
      slide: "スライド",
      slideNumber: "{slideNumber}",
      star: "1件のスター",
      stars: "{star}件のスター",
      trueLabel: "True",
      unselectAll: "すべての選択を解除",
      unselectLabel: "選択を解除します",
      unselectRow: "未選択行",
      zoomImage: "画像を拡大",
      zoomIn: "拡大",
      zoomOut: "縮小",
    },
  };

  // custom PF labels
  PrimeFaces.locales["ja"] = $.extend(true, {}, PrimeFaces.locales["ja"], {
    weekNumberTitle: "週",
    isRTL: false,
    yearSuffix: "年",
    timeOnlyTitle: "時間のみ",
    timeText: "時間",
    hourText: "時",
    minuteText: "分",
    secondText: "秒",
    millisecondText: "ミリ秒",
    year: "年",
    month: "月",
    week: "週",
    day: "日",
    list: "一覧",
    allDayText: "終日",
    moreLinkText: "更に表示...",
    noEventsText: "予定なし",
    aria: {
      "datatable.sort.ASC": "昇順でソート",
      "datatable.sort.DESC": "降順でソート",
      "datatable.sort.NONE": "ソートをクリア",
      "colorpicker.OPEN": "カラーピッカーを開く",
      "colorpicker.CLOSE": "カラーピッカーを閉じる",
      "colorpicker.CLEAR": "選択色をクリア",
      "colorpicker.MARKER": "彩度: {s}. 明度: {v}.",
      "colorpicker.HUESLIDER": "色調スライダー",
      "colorpicker.ALPHASLIDER": "不透明度スライダー",
      "colorpicker.INPUT": "値フィールド",
      "colorpicker.FORMAT": "色フォーマット",
      "colorpicker.SWATCH": "色スイッチ",
      "colorpicker.INSTRUCTION": "彩度と明度セレクターは上下左右キーで選択することができます。",
      "spinner.INCREASE": "価値を高める",
      "spinner.DECREASE": "減少値",
      "switch.ON": "オン",
      "switch.OFF": "オフ",
      "messages.ERROR": "エラー",
      "messages.FATAL": "致命的",
      "messages.INFO": "インフォメーション",
      "messages.WARN": "警告",
    },
    messages: {
      //optional for Client Side Validation
      "javax.faces.component.UIInput.REQUIRED": "{0}: 検証エラー: 必須入力です。",
      "javax.faces.converter.IntegerConverter.INTEGER": "{2}: '{0}' 数値を入力してください。",
      "javax.faces.converter.IntegerConverter.INTEGER_detail": "{2}: '{0}' -2147483648 から 2147483647 までの数値を入力してください。 (例): {1}。",
      "javax.faces.converter.DoubleConverter.DOUBLE": "{2}: '{0}' 数値を入力してください。",
      "javax.faces.converter.DoubleConverter.DOUBLE_detail": "{2}: '{0}' 4.9E-324 から 1.7976931348623157E308 までの数値を入力してください。 (例): {1}。",
      "javax.faces.converter.BigDecimalConverter.DECIMAL": "{2}: '{0}' 符号付きの数値を入力してください。",
      "javax.faces.converter.BigDecimalConverter.DECIMAL_detail": "{2}: '{0}' 符号付きの数値(整数もしくは少数を含む数値)を入力してください。 (例): {1}。",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER": "{2}: '{0}' 数値を入力してください。",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail": "{2}: '{0}' 数値を入力してください。 (例): {1}。",
      "javax.faces.converter.ByteConverter.BYTE": "{2}: '{0}' 0 から 255 までの数値を入力してください。",
      "javax.faces.converter.ByteConverter.BYTE_detail": "{2}: '{0}' 0 から 255 までの数値を入力してください。 (例): {1}。",
      "javax.faces.converter.CharacterConverter.CHARACTER": "{1}: '{0}' 有効な文字を入力してください。",
      "javax.faces.converter.CharacterConverter.CHARACTER_detail": "{1}: '{0}' 有効なASCII文字を入力してください。",
      "javax.faces.converter.ShortConverter.SHORT": "{2}: '{0}' 数値を入力してください。",
      "javax.faces.converter.ShortConverter.SHORT_detail": "{2}: '{0}' -32768 から 32767 までの数値を入力してください。 (例): {1}。",
      "javax.faces.converter.BooleanConverter.BOOLEAN": "{1}: '{0}' true もしくは false を入力してください。",
      "javax.faces.converter.BooleanConverter.BOOLEAN_detail": "{1}: '{0}' true もしくは false を入力してください。(true以外の値は全てfalseとして扱われます)",
      "javax.faces.validator.LongRangeValidator.MAXIMUM": "{1}: 検証エラー: {0}以下の値を入力してください。",
      "javax.faces.validator.LongRangeValidator.MINIMUM": "{1}: 検証エラー: {0}以上の値を入力してください。",
      "javax.faces.validator.LongRangeValidator.NOT_IN_RANGE": "{2}: 検証エラー: {0} から {1} までの値を入力してください。",
      "javax.faces.validator.LongRangeValidator.TYPE": "{0}: 検証エラー: 値の形式が不正です。",
      "javax.faces.validator.DoubleRangeValidator.MAXIMUM": "{1}: 検証エラー: {0}以下の値を入力してください。",
      "javax.faces.validator.DoubleRangeValidator.MINIMUM": "{1}: 検証エラー: {0}以上の値を入力してください。",
      "javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE": "{2}: 検証エラー: {0} から {1} までの値を入力してください。",
      "javax.faces.validator.DoubleRangeValidator.TYPE": "{0}: 検証エラー: 値の形式が不正です。",
      "javax.faces.converter.FloatConverter.FLOAT": "{2}: '{0}' 数値を入力してください。",
      "javax.faces.converter.FloatConverter.FLOAT_detail": "{2}: '{0}' 1.4E-45 から 3.4028235E38 までの数値を入力してください。 (例): {1}。",
      "javax.faces.converter.DateTimeConverter.DATE": "{2}: '{0}' 日付の形式が不正です。",
      "javax.faces.converter.DateTimeConverter.DATE_detail": "{2}: '{0}' 日付の形式が不正です。 (例): {1}。",
      "javax.faces.converter.DateTimeConverter.TIME": "{2}: '{0}' 時間の形式が不正です。",
      "javax.faces.converter.DateTimeConverter.TIME_detail": "{2}: '{0}' 時間の形式が不正です。 (例): {1}。",
      "javax.faces.converter.DateTimeConverter.DATETIME": "{2}: '{0}' 日時の形式が不正です。",
      "javax.faces.converter.DateTimeConverter.DATETIME_detail": "{2}: '{0}' 日時の形式が不正です。 (例): {1}。",
      "javax.faces.converter.DateTimeConverter.PATTERN_TYPE": "{1}: 値を変換するためにはパターンもしくはタイプ属性を指定してください。",
      "javax.faces.converter.NumberConverter.CURRENCY": "{2}: '{0}' 通貨の形式が不正です。",
      "javax.faces.converter.NumberConverter.CURRENCY_detail": "{2}: '{0}' 通貨の形式が不正です。 (例): {1}。",
      "javax.faces.converter.NumberConverter.PERCENT": "{2}: '{0}' パーセントの形式が不正です。",
      "javax.faces.converter.NumberConverter.PERCENT_detail": "{2}: '{0}' パーセントの形式が不正です。 (例): {1}。",
      "javax.faces.converter.NumberConverter.NUMBER": "{2}: '{0}' 数値の形式が不正です。",
      "javax.faces.converter.NumberConverter.NUMBER_detail": "{2}: '{0}' 数値の形式が不正です。 (例): {1}。",
      "javax.faces.converter.NumberConverter.PATTERN": "{2}: '{0}' 値が指定されたパターンに一致しません。",
      "javax.faces.converter.NumberConverter.PATTERN_detail": "{2}: '{0}' 値が指定されたパターンに一致しません。 (例): {1}。",
      "javax.faces.validator.LengthValidator.MINIMUM": "{1}: 検証エラー: {0}以上の長さを指定してください。",
      "javax.faces.validator.LengthValidator.MAXIMUM": "{1}: 検証エラー: {0}以下の長さを指定してください。",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET": "正規表現パターンを指定してください。",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail": "正規表現パターンを指定してください。",
      "javax.faces.validator.RegexValidator.NOT_MATCHED": "正規表現パターンと一致しません。",
      "javax.faces.validator.RegexValidator.NOT_MATCHED_detail": "正規表現パターン({0})と一致しません。",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION": "正規表現パターンが不正です。",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail": "正規表現パターンが不正です({0})。",
      "primefaces.FileValidator.FILE_LIMIT": "ファイルの最大数を超えました。",
      "primefaces.FileValidator.FILE_LIMIT_detail": "最大数: {0}。",
      "primefaces.FileValidator.ALLOW_TYPES": "無効なファイルタイプです。",
      "primefaces.FileValidator.ALLOW_TYPES_detail": "無効なファイル タイプ: '{0}'。許可されるタイプ: '{1}'。",
      "primefaces.FileValidator.SIZE_LIMIT": "ファイル サイズが無効です。",
      "primefaces.FileValidator.SIZE_LIMIT_detail": "ファイル '{0}' は {1} より大きくてはなりません。",
      //optional for bean validation integration in client side validation
      "javax.faces.validator.BeanValidator.MESSAGE": "{0}",
      "javax.validation.constraints.AssertFalse.message": "偽であるに違いない",
      "javax.validation.constraints.AssertTrue.message": "真実であるに違いない",
      "javax.validation.constraints.DecimalMax.message": "{0} 以下である必要があります",
      "javax.validation.constraints.DecimalMin.message": "{0}以上である必要があります",
      "javax.validation.constraints.Digits.message": "数値が範囲外です (&lt;{0} 桁&gt;.&lt;{1} 桁&gt; が期待されます)",
      "javax.validation.constraints.Email.message": "正しい形式のメールアドレスである必要があります",
      "javax.validation.constraints.Future.message": "将来の日付である必要があります",
      "javax.validation.constraints.FutureOrPresent.message": "現在または将来の日付である必要があります",
      "javax.validation.constraints.Max.message": "{0} 以下である必要があります",
      "javax.validation.constraints.Min.message": "{0}以上である必要があります",
      "javax.validation.constraints.Negative.message": "0未満でなければなりません",
      "javax.validation.constraints.NegativeOrZero.message": "0以下である必要があります",
      "javax.validation.constraints.NotBlank.message": "空白にすることはできません",
      "javax.validation.constraints.NotEmpty.message": "空であってはいけません",
      "javax.validation.constraints.NotNull.message": "NULLにすることはできません",
      "javax.validation.constraints.Null.message": "NULLである必要があります",
      "javax.validation.constraints.Past.message": "過去の日付である必要があります",
      "javax.validation.constraints.PastOrPresent.message": "過去または現在の日付である必要があります",
      "javax.validation.constraints.Pattern.message": "&#39;{0}&#39; と一致する必要があります",
      "javax.validation.constraints.Positive.message": "0より大きくなければなりません",
      "javax.validation.constraints.PositiveOrZero.message": "0以上である必要があります",
      "javax.validation.constraints.Size.message": "サイズは {0} から {1} の間でなければなりません",
    },
  });
  PrimeFaces.locales["ja_JP"] = PrimeFaces.locales["ja"];
}