def quick_sort(array)
	if (array.length < 2) 
		return array
	else
		pivot = array.pop
		left = []
		right = []
		array.each do |a|
	 		a < pivot ? left.push(a) : right.push(a)
		end	
		return (quick_sort(left) + [pivot] + quick_sort(right))
	end
end
quick_sort([1,0,-1,3])
