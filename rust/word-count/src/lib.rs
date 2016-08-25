use std::collections::HashMap;

pub fn word_count(input_string: &str) -> HashMap<String, u32> {
    let mut return_hash = HashMap::new();
    let v: Vec<&str> = input_string.split(|c: char| !c.is_alphanumeric()).collect();
    for s in v {
        if s.len() > 0{
            let string_of_s = s.to_string().to_lowercase();
            let counter = return_hash.entry(string_of_s).or_insert(0);
            *counter += 1;
        }
    }
    return_hash
}