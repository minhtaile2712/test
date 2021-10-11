def visualization(*args):
num_x = 1 + args[2][0] + args[2][1]
if (len(args) >= 4):
fig, axes = plt.subplots(num_x, len(args[0]), figsize = (args[3][0],␣
,→ args[3][1]))
else:
fig, axes = plt.subplots(num_x, len(args[0]), figsize = (5 * len(args[0]),␣
,→ 5 * num_x))
for i in range(len(args[0])):
j = 0
axes[j][i].imshow(args[0][i], cmap = 'gray', vmin = 0, vmax = 255)
if args[2][0] == 1:
j += 1
axes[j][i].hist(args[0][i].ravel(), 256, [0,256], label = 'PDF')
if args[2][2] == 1:
ax2 = axes[j][i].twinx()
ax2.hist(args[0][i].ravel(), 256, [0,256], cumulative = True, histtype␣
,→ = 'step', color = 'red', label = 'CDF')
axes[j][i].set_title('Histogram - CDF')
if args[2][1] == 1:
j += 1
f = np.fft.fft2(args[0][i])
fshift = np.fft.fftshift(f)
magnitude_spectrum = 20*np.log(np.abs(fshift))
axes[j][i].imshow(magnitude_spectrum, cmap = 'gray')
if (len(args) >=2 ):
j = 0
axes[0][i].set_title(args[1][i])
if args[2][0] == 1:
j += 1
axes[j][i].set_title('Histogram' + args[1][i])
if args[2][1] == 1:
j += 1
axes[j][i].set_title('Spetrum' + args[1][i])
fig.tight_layout()