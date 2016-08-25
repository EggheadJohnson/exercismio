pub fn hamming_distance(s1: &'static str, s2: &'static str) -> Result<u32, &'static str>{
	if s1.len() != s2.len() {
		Err("inputs of different length")
	}
	else {
		let mut total = 0;
		let s1_arr: Vec<char> = s1.chars().collect();
		let s2_arr: Vec<char> = s2.chars().collect();
		for c in 0..s2_arr.len() {
			if s1_arr[c] != s2_arr[c] {
				total += 1;
			}
		}

		
		Ok(total)
	}
}