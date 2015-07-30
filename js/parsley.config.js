window.ParsleyConfig = {
  validators: {
    conditionalrequired: {
      fn: function (value, requirements) {
        var submitsTalk = $(requirements[0]).is(':checked');
        var talkDescriptionIsEmpty = value === '';

        return !submitsTalk || !talkDescriptionIsEmpty;
      },
      priority: 32
    }
  }
};