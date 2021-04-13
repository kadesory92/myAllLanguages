# -*- coding: utf-8 -*-

#modifying the default directory
import os
os.chdir("C:/Users/SORY/Desktop/WEB_SCRIPTS/fondamentauxPYTHON/clustering")

#importing the librarys
import pandas as pd;
import numpy as np;
import matplotlib.pyplot as plt
from sklearn import preprocessing
from pandas.tools.plotting import scatter_matrix
from scipy.cluster.hierarchy import dendrogram, linkage, fcluster
from sklearn.decomposition import PCA

fromage = pd.read_table("fromage.txt",sep="\t",header=0,index_col=0)

#dimension
print(fromage.shape)

#displaying the 6 first rows
print(fromage.iloc[0:6,:])

#descriptive statistics
print(fromage.describe())

#pairwise scatter plots
scatter_matrix(fromage,figsize=(9,9))

#standardizing the dataset
fromage_cr = preprocessing.scale(fromage)

#libraries for plotting and HAC


#generate the linkage matrix - ward's method
Z = linkage(fromage_cr,method='ward',metric='euclidean')

#plotting the dendrogram
plt.title("CAH")
dendrogram(Z,labels=fromage.index,orientation='left',color_threshold=0)
plt.show()

#highlighting of the 4 groups (height t = 7)
plt.title('CAH avec matérialisation des 4 classes')
dendrogram(Z,labels=fromage.index,orientation='left',color_threshold=7)
plt.show()

#cutting at the height t = 7 ==> cluster membership of cases
groupes_cah = fcluster(Z,t=7,criterion='distance')
print(groupes_cah)

#sorted index of the clusters
idg = np.argsort(groupes_cah)

#printing the instance names and their cluster number
print(pandas.DataFrame(fromage.index[idg],groupes_cah[idg]))

#k-means on the standardized dataset
from sklearn import cluster
kmeans = cluster.KMeans(n_clusters=4)
kmeans.fit(fromage_cr)

print(kmeans.inertia_)

#sorted index of the clusters
idk = np.argsort(kmeans.labels_)

#printing the instance names and their cluster number
print(pandas.DataFrame(fromage.index[idk],kmeans.labels_[idk]))

#distances to the centroids for each instance
print(kmeans.transform(fromage_cr))

#equivalences with the HAC clusters
pandas.crosstab(groupes_cah,kmeans.labels_)

#library for evaluating the partitions
from sklearn import metrics

#measuring the “silhouette” score
#by varying the number of clusters from 2 to 10
res = np.arange(9,dtype="double")
for k in np.arange(9):
    km = cluster.KMeans(n_clusters=k+2)
    km.fit(fromage_cr)
    res[k] = metrics.silhouette_score(fromage_cr,km.labels_)
    
print(res)

#plotting nb. of clusters vs. silhouette score
plt.title("Silhouette")
plt.xlabel("# of clusters")
plt.plot(np.arange(2,11,1),res)
plt.show()

#overall mean for each variable
m = fromage.mean()

#TSS (total sum of squares)
TSS = fromage.shape[0]*fromage.var(ddof=0)
print(TSS)

#slicing the data.frame according to the groups
gb = fromage.groupby(kmeans.labels_)

#conditional groups size
nk = gb.size()
print(nk)

#conditional means
mk = gb.mean()
print(mk)

#square(difference between cond. means and overall mean)
EMk = (mk-m)**2

#weighted by the size of the groups
EM = EMk.multiply(nk,axis=0)

#sum => BSS (between sum of squares)
BSS = np.sum(EM,axis=0)
print(BSS)

#square of the correlation ratio
#i.e. proportion of variance explained
#for each variable
R2 = BSS/TSS
print(R2)

#PCA
acp = PCA(n_components=2).fit_transform(fromage_cr)

#plotting the individuals into the factor map
#with various colors according to the cluster membership
for couleur,k in zip(['red','blue','lawngreen','aqua'],[0,1,2,3]):
    plt.scatter(acp[kmeans.labels_==k,0],acp[kmeans.labels_==k,1],c=couleur)
plt.show()    

#remove the instances corresponding to the group n°0 from the k-means
fromage_subset = fromage.iloc[kmeans.labels_!=0,:]
print(fromage_subset.shape)
    
#standardize the new version of the dataset
fromage_subset_cr = preprocessing.scale(fromage_subset)

#generate the linkage matrix
Z_subset = linkage(fromage_subset_cr,method='ward',metric='euclidean')

#hac and plotting the dendrogram
plt.title("CAH")
dendrogram(Z_subset,labels=fromage_subset.index,orientation='left',color_threshold=7)
plt.show()

#groups
groupes_subset_cah = fcluster(Z_subset,t=7,criterion='distance')
print(groupes_subset_cah)

#PCA
acp_subset = PCA(n_components=2).fit_transform(fromage_subset_cr)

#plotting the individuals into the factor map
#with various colors according to the cluster membership
plt.figure(figsize=(18,7.715))
for couleur,k in zip(['blue','lawngreen','aqua'],[1,2,3]):
    plt.scatter(acp_subset[groupes_subset_cah==k,0],acp_subset[groupes_subset_cah==k,1],c=couleur)

#set the row names into the scatter plot
for i,label in enumerate(fromage_subset.index):
    plt.annotate(label,(acp_subset[i,0],acp_subset[i,1]))

plt.show()      