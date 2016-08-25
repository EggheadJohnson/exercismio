pub fn hello(name: Option<&str>) -> String {
    let mut output_str = "Hello, ".to_string();
    if name != None {
        output_str.push_str(name.unwrap());
        output_str.push_str("!");
    }
    else {
        output_str.push_str("World!");
    }
    output_str
}
