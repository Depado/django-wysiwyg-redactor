if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.supersub = function() {
    return {
        init: function() {
            var sup = this.button.add('superscript', 'Superscript');
            var sub = this.button.add('subscript', 'Subscript');

            this.button.setAwesome('superscript', 'fa-superscript');
            this.button.setAwesome('subscript', 'fa-subscript');

            this.button.addCallback(sup, this.supersub.formatSup);
            this.button.addCallback(sub, this.supersub.formatSub);
        },
        formatSup: function() {
            this.inline.format('sup');
        },
        formatSub: function() {
            this.inline.format('sub');
        }
    };
};
