pub fn anagrams_for(word: &'static str, inputs: &[&'static str]) -> Vec<&'static str> {
    let mut outputs = Vec::new();
    let mut c = 0;
    
    while c < inputs.len() {
        if test_two(word, inputs[c]) {
            outputs.push(inputs[c]);
        }
        c += 1;
    }
    
    outputs
}

fn test_two(word_a: &'static str, word_b: &'static str) -> bool {
    let word_a_string = word_a.to_string().to_lowercase();
    let word_b_string = word_b.to_string().to_lowercase();
    
    if word_a_string.len() != word_b_string.len() || word_a_string == word_b_string{
        false
    }
    else {
        for c in word_a_string.chars() {
            
            if !word_b_string.contains(c) {
                return false;
            }
            let a_matches: Vec<&str> = word_a_string.matches(c).collect();
            let b_matches: Vec<&str> = word_b_string.matches(c).collect();
            if a_matches.len() != b_matches.len() {
                return false;
            }
        }
        true
    }
    
}