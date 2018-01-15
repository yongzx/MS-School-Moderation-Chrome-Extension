$.get("https://www.minerva.kgi.edu/admin/schools_moderation?*", function(data) {
    var name_school = document.getElementsByName('name')[0].value;
    var category_school = document.getElementsByName('category')[0].value;
    var category = {
        "10": "Private",
        "20": "Public",
        "30": "Home",
        "40": "IB",
        "50": "International",
        "60": "American",
        "70": "Other"
    };

    if (category.hasOwnProperty(category_school)) {
        category_school = category[category_school];
    }

    var address_school = document.getElementsByName('address')[0].value;
    var city_school = document.getElementsByName('city')[0].value;
    var state_school = document.getElementsByName('state')[0].value;
    var postal_school = document.getElementsByName('postal')[0].value;

    var duplicates = document.getElementsByClassName('p2 border bg-white');
    var dup_idx = Object.keys(duplicates);
    var deduplicate_val = 0;
    for (var i = 0; i < dup_idx.length; i++) {
        // console.log(duplicates[i]);
        var id_category = duplicates[i].getElementsByClassName('school_cat')[0].getAttribute("id");
        var id = id_category.split("_")[0];
        var name_dup = duplicates[i].getElementsByTagName('b')[0].textContent;
        var category_dup = document.getElementById(id + "_" + "category").innerHTML;
        var address_dup = document.getElementById(id + "_" + "address").innerHTML;
        var city_dup = document.getElementById(id + "_" + "city").innerHTML;
        var state_dup = document.getElementById(id + "_" + "state").innerHTML;
        var postal_dup = document.getElementById(id + "_" + "postal").innerHTML;

        var track_same = 0;
        if (name_dup && name_school && levenshtein(name_dup, name_school) < 3) {track_same ++;}
        if (category_dup && category_school && levenshtein(category_dup, category_school) < 3) {track_same ++;}
        if (address_dup && address_school && levenshtein(address_dup, address_school) < 3) {track_same ++;}
        if (city_dup && city_school && levenshtein(city_dup, city_school) < 3) {track_same ++;}
        if (state_dup && state_school && levenshtein(state_dup, state_school) < 3) {track_same ++;}
        if (postal_dup && postal_school && levenshtein(postal_dup, postal_school) < 3) {track_same ++;}
        if (track_same >= 3) {
            // is Duplicate
            duplicates[i].getElementsByClassName('btn btn-primary bg-green h6 ml1 show')[0].click();
        }
    }
});

function levenshtein(s1, s2) {
    if (s1 == s2) {
        return 0;
    }

    var s1_len = s1.length;
    var s2_len = s2.length;
    if (s1_len === 0) {
        return s2_len;
    }
    if (s2_len === 0) {
        return s1_len;
    }

    // BEGIN STATIC
    var split = false;
    try {
        split = !('0')[0];
    } catch (e) {
        split = true;
    }

    if (split) {
        s1 = s1.split('');
        s2 = s2.split('');
    }

    var v0 = new Array(s1_len + 1);
    var v1 = new Array(s1_len + 1);

    var s1_idx = 0,
        s2_idx = 0,
        cost = 0;
    for (s1_idx = 0; s1_idx < s1_len + 1; s1_idx++) {
        v0[s1_idx] = s1_idx;
    }
    var char_s1 = '',
        char_s2 = '';
    for (s2_idx = 1; s2_idx <= s2_len; s2_idx++) {
        v1[0] = s2_idx;
        char_s2 = s2[s2_idx - 1];

        for (s1_idx = 0; s1_idx < s1_len; s1_idx++) {
            char_s1 = s1[s1_idx];
            cost = (char_s1 == char_s2) ? 0 : 1;
            var m_min = v0[s1_idx + 1] + 1;
            var b = v1[s1_idx] + 1;
            var c = v0[s1_idx] + cost;
            if (b < m_min) {
                m_min = b;
            }
            if (c < m_min) {
                m_min = c;
            }
            v1[s1_idx + 1] = m_min;
        }
        var v_tmp = v0;
        v0 = v1;
        v1 = v_tmp;
    }
    return v0[s1_len];
}
