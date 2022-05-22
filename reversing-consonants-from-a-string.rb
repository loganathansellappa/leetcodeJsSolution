def reverse_consonants(str) 
	str_array = str.split("")
	consonants = 'bcdfghjklnpqrstvwxyzBCDFGHJKLNPQRSTVWXYZ'
	left = 0;
	right = str_array.size - 1;

	while(left < right)
		while(left < right && !consonants.include?(str_array[left]))
			left += 1
		end	

		while(left < right && !consonants.include?(str_array[right])) 
			right -= 1
		end

		str_array[left], str_array[right] = str_array[right], str_array[left]	

		left += 1
		right -= 1
	end	
	return str_array.join('')

end
puts reverse_consonants('somestring')
