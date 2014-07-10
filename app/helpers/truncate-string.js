export default Ember.Handlebars.makeBoundHelper(function(str,len) {
    if (!str || !len) { return str; }

    if (str.length > len && str.length > 0) {
        var new_str = str + " ";
        new_str = str.substr(0, len);
        new_str = str.substr(0, new_str.lastIndexOf(" "));
        new_str = (new_str.length > 0) ? new_str : str.substr(0, len);

        // strip the html
        new_str = Ember.$('<span>').html(new_str).text();

        return new Ember.Handlebars.SafeString(new_str + '...');
    }
    return str;
});
