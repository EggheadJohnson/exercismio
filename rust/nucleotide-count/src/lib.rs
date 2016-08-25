use std::collections::HashMap;

pub fn nucleotide_counts(input_string: &str) -> HashMap<char, usize> {
	let mut return_hash = HashMap::new();
	let nucleotides = ['A', 'C', 'T', 'G'];
	for n in &nucleotides {
		return_hash.insert(*n, count(*n, input_string));
	}
	return_hash
}

pub fn count(nucleotide: char, input_string: &str) -> usize {
	let mut tot = 0;
	for c in input_string.chars(){
		if c == nucleotide {
			tot += 1;
		}
	}
	tot
}