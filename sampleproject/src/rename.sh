$val = 0
for file in ./ 
do
mv file  "$val.jpg"
$val = $val + 1
done

