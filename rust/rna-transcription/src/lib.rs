#[derive(Clone, PartialEq, Debug)]
pub struct RibonucleicAcid {
	nucleotide: String,
}

impl RibonucleicAcid {
	pub fn new(nucleotide: &str) -> RibonucleicAcid {
		RibonucleicAcid {nucleotide: nucleotide.to_string()}
	}
	fn new_from_dna(nucleotide: String) -> RibonucleicAcid {
		RibonucleicAcid {nucleotide: nucleotide}
	}
}


#[derive(Clone, PartialEq, Debug)]
pub struct DeoxyribonucleicAcid {
	nucleotide: String,
}

impl DeoxyribonucleicAcid {
	pub fn new(nucleotide: &str) -> DeoxyribonucleicAcid {
		DeoxyribonucleicAcid {nucleotide: nucleotide.to_string()}
	}
	pub fn to_rna(&self) -> RibonucleicAcid {
		let dna = self.nucleotide
		.chars()
		.map(|c: char| match c {
			'G' => 'C',
			'C' => 'G',
			'T' => 'A',
			'A' => 'U',
			_ => panic!("Not an acceptable input!!"),

		})
		.collect::<String>()
		.as_str().to_string();

		RibonucleicAcid::new_from_dna(dna)
	}
	
}