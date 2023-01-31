// Setup
function phoneticLookup(val) {


    // Only change code below this line
    let result = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }

    result = result[val];

    // Only change code above this line
    return result;
}

phoneticLookup("charlie");